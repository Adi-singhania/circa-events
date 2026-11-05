import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useRegistrations } from '../context/RegistrationContext';
import { EventCard } from '../components/events/EventCard/EventCard';
import { EventCardSkeleton } from '../components/common/Skeleton/EventCardSkeleton';
import { CategoryChips } from '../components/events/CategoryChips/CategoryChips';
import { SearchBar } from '../components/events/SearchBar/SearchBar';
import { FilterBar } from '../components/events/FilterBar/FilterBar';
import { EmptyState } from '../components/events/EmptyState/EmptyState';
import { Modal } from '../components/common/Modal/Modal';
import { RegistrationForm } from '../components/registration/RegistrationForm/RegistrationForm';
import { useDebounce } from '../hooks/useDebounce';
import styles from './EventsCatalogue.module.css';

const ITEMS_PER_PAGE = 6;

export const EventsCatalogue = () => {
  const { events } = useRegistrations();
  const [searchParams, setSearchParams] = useSearchParams();

  // Read state from URL query params
  const initialCategory = searchParams.get('category') || 'All';
  const initialSearch = searchParams.get('q') || '';
  const initialFree = searchParams.get('free') === 'true';
  const initialSort = searchParams.get('sort') || 'date-asc';

  const [category, setCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [isFreeOnly, setIsFreeOnly] = useState(initialFree);
  const [sortOption, setSortOption] = useState(initialSort);

  // Pagination / Load More state
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  // Skeleton loading simulation on mount
  const [isLoading, setIsLoading] = useState(true);
  // Quick register modal state
  const [modalEvent, setModalEvent] = useState(null);

  const debouncedSearch = useDebounce(searchQuery, 250);

  // Simulate initial skeleton load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  }, []);

  // Synchronize state with URL query parameters
  useEffect(() => {
    const params = new URLSearchParams();
    if (category && category !== 'All') params.set('category', category);
    if (debouncedSearch.trim()) params.set('q', debouncedSearch.trim());
    if (isFreeOnly) params.set('free', 'true');
    if (sortOption && sortOption !== 'date-asc') params.set('sort', sortOption);

    setSearchParams(params, { replace: true });
  }, [category, debouncedSearch, isFreeOnly, sortOption, setSearchParams]);

  // Dynamic category counts
  const categoryCounts = useMemo(() => {
    const counts = { All: events.length };
    events.forEach((ev) => {
      counts[ev.category] = (counts[ev.category] || 0) + 1;
    });
    return counts;
  }, [events]);

  // Filter and Sort Events
  const filteredEvents = useMemo(() => {
    let result = events.filter((ev) => {
      // Category check
      if (category !== 'All' && ev.category !== category) return false;

      // Free only check
      if (isFreeOnly && !ev.isFree) return false;

      // Search query check
      if (debouncedSearch.trim()) {
        const q = debouncedSearch.toLowerCase().trim();
        const matchesTitle = ev.title.toLowerCase().includes(q);
        const matchesVenue = ev.venue.name.toLowerCase().includes(q);
        const matchesCity = ev.venue.city.toLowerCase().includes(q);
        const matchesCategory = ev.category.toLowerCase().includes(q);
        const matchesTagline = ev.tagline.toLowerCase().includes(q);
        const matchesTags = ev.tags?.some((t) => t.toLowerCase().includes(q));

        if (!matchesTitle && !matchesVenue && !matchesCity && !matchesCategory && !matchesTagline && !matchesTags) {
          return false;
        }
      }

      return true;
    });

    // Sorting
    result.sort((a, b) => {
      if (sortOption === 'date-asc') {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      if (sortOption === 'date-desc') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      if (sortOption === 'name-asc') {
        return a.title.localeCompare(b.title);
      }
      if (sortOption === 'seats-desc') {
        return b.seatsLeft - a.seatsLeft;
      }
      return 0;
    });

    return result;
  }, [events, category, isFreeOnly, debouncedSearch, sortOption]);

  const visibleEvents = filteredEvents.slice(0, visibleCount);
  const hasMore = visibleCount < filteredEvents.length;

  const handleReset = () => {
    setCategory('All');
    setSearchQuery('');
    setIsFreeOnly(false);
    setSortOption('date-asc');
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const isFiltered = category !== 'All' || Boolean(searchQuery.trim()) || isFreeOnly || sortOption !== 'date-asc';

  return (
    <div className={styles.pageWrap}>
      <header className={styles.catalogueHeader}>
        <div className={`container ${styles.headerContainer}`}>
          <div className={styles.kicker}>THE COMPLETE LEDGER &bull; 2026</div>
          <h1 className={styles.title}>Seasonal Programme</h1>
          <p className={styles.intro}>
            Eighteen verified gatherings celebrating printmaking, modular sound, gastronomy, and traditional stage arts. Filter by discipline, search by town, or reserve your seat directly.
          </p>
        </div>
      </header>

      <main className="container" id="main-content">
        {/* Search Input */}
        <div className={styles.searchSection}>
          <SearchBar
            value={searchQuery}
            onChange={(val) => {
              setSearchQuery(val);
              setVisibleCount(ITEMS_PER_PAGE);
            }}
            onClear={() => setSearchQuery('')}
            placeholder="Search by title, artist, city, or venue..."
          />
        </div>

        {/* Category Horizontal Filter Chips */}
        <CategoryChips
          selectedCategory={category}
          onSelectCategory={(cat) => {
            setCategory(cat);
            setVisibleCount(ITEMS_PER_PAGE);
          }}
          categoryCounts={categoryCounts}
        />

        {/* Filter & Sort Bar */}
        <FilterBar
          sortOption={sortOption}
          onSortChange={setSortOption}
          isFreeOnly={isFreeOnly}
          onToggleFreeOnly={(checked) => {
            setIsFreeOnly(checked);
            setVisibleCount(ITEMS_PER_PAGE);
          }}
          totalResults={filteredEvents.length}
          isFiltered={isFiltered}
          onResetFilters={handleReset}
        />

        {/* Grid of Events or Skeletons or Empty State */}
        {isLoading ? (
          <div className={styles.grid}>
            {Array.from({ length: 6 }).map((_, i) => (
              <EventCardSkeleton key={i} />
            ))}
          </div>
        ) : visibleEvents.length > 0 ? (
          <>
            <div className={styles.grid}>
              {visibleEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onQuickRegister={(ev) => setModalEvent(ev)}
                />
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className={styles.loadMoreWrap}>
                <button
                  type="button"
                  onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
                  className={styles.loadMoreBtn}
                >
                  Load More Happenings ({filteredEvents.length - visibleCount} remaining)
                </button>
              </div>
            )}
          </>
        ) : (
          <EmptyState
            message="Nothing here yet. Try adjusting your search keywords, clearing your discipline filters, or resetting."
            onReset={handleReset}
          />
        )}
      </main>

      {/* Quick Registration Modal */}
      <Modal
        isOpen={!!modalEvent}
        onClose={() => setModalEvent(null)}
        title={modalEvent ? modalEvent.title : 'Reserve Your Pass'}
        subtitle={modalEvent ? `${modalEvent.venue.name}, ${modalEvent.venue.city}` : ''}
      >
        {modalEvent && (
          <RegistrationForm
            initialEventId={modalEvent.id}
            onCloseModal={() => setModalEvent(null)}
          />
        )}
      </Modal>
    </div>
  );
};
