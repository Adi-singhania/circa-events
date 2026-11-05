import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useRegistrations } from '../context/RegistrationContext';
import { Hero } from '../components/home/Hero/Hero';
import { MarqueeStrip } from '../components/home/MarqueeStrip/MarqueeStrip';
import { FeaturedSection } from '../components/home/FeaturedSection/FeaturedSection';
import { Timeline } from '../components/home/Timeline/Timeline';
import { StatsCounter } from '../components/home/StatsCounter/StatsCounter';
import { EventCard } from '../components/events/EventCard/EventCard';
import { CategoryChips } from '../components/events/CategoryChips/CategoryChips';
import { SearchBar } from '../components/events/SearchBar/SearchBar';
import { EmptyState } from '../components/events/EmptyState/EmptyState';
import { Modal } from '../components/common/Modal/Modal';
import { RegistrationForm } from '../components/registration/RegistrationForm/RegistrationForm';
import { useDebounce } from '../hooks/useDebounce';
import styles from './Home.module.css';

export const Home = () => {
  const { events } = useRegistrations();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalEvent, setModalEvent] = useState(null);

  const debouncedSearch = useDebounce(searchQuery, 250);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts = { All: events.length };
    events.forEach((ev) => {
      counts[ev.category] = (counts[ev.category] || 0) + 1;
    });
    return counts;
  }, [events]);

  // Featured events (top 3)
  const featuredEvents = useMemo(() => {
    return events.filter((e) => e.featured).slice(0, 3);
  }, [events]);

  // Nearest event for countdown in hero
  const nearestEvent = events[1] || events[0];

  // Filtered upcoming events preview (showing up to 6 cards on home)
  const filteredEvents = useMemo(() => {
    return events.filter((ev) => {
      const matchesCat =
        selectedCategory === 'All' || ev.category === selectedCategory;

      if (!matchesCat) return false;

      if (!debouncedSearch.trim()) return true;

      const q = debouncedSearch.toLowerCase().trim();
      return (
        ev.title.toLowerCase().includes(q) ||
        ev.venue.name.toLowerCase().includes(q) ||
        ev.venue.city.toLowerCase().includes(q) ||
        ev.category.toLowerCase().includes(q) ||
        ev.tagline.toLowerCase().includes(q)
      );
    });
  }, [events, selectedCategory, debouncedSearch]);

  const previewEvents = filteredEvents.slice(0, 6);

  return (
    <div className={styles.homeWrap}>
      {/* 1. Hero Section */}
      <Hero nextEvent={nearestEvent} />

      {/* 2. Marquee Strip */}
      <MarqueeStrip />

      {/* 3. Featured Asymmetric Section */}
      <FeaturedSection
        featuredEvents={featuredEvents}
        onQuickRegister={(event) => setModalEvent(event)}
      />

      {/* 4. Upcoming Events Catalogue Preview */}
      <section className={styles.catalogueSection} aria-labelledby="upcoming-heading">
        <div className={`container ${styles.container}`}>
          <div className={styles.sectionHeader}>
            <div>
              <div className={styles.kicker}>THE SEASON CALENDAR</div>
              <h2 id="upcoming-heading" className={styles.sectionTitle}>
                Upcoming Gatherings
              </h2>
            </div>
            <Link to="/events" className={styles.viewAllLink}>
              <span>View Full Programme ({events.length})</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Search Bar & Category Chips */}
          <div className={styles.filterControls}>
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              onClear={() => setSearchQuery('')}
              placeholder="Search by title, city, or discipline..."
            />
            <CategoryChips
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              categoryCounts={categoryCounts}
            />
          </div>

          {/* Cards Grid or Empty State */}
          {previewEvents.length > 0 ? (
            <div className={styles.cardsGrid}>
              {previewEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onQuickRegister={(ev) => setModalEvent(ev)}
                />
              ))}
            </div>
          ) : (
            <EmptyState
              message={`No gatherings found matching "${debouncedSearch}".`}
              onReset={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
            />
          )}

          {/* Bottom Call to Explore full catalogue */}
          <div className={styles.moreWrap}>
            <Link to="/events" className={styles.largeBrowseBtn}>
              <span>Browse All {events.length} Happenings in Catalogue</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. How It Works Timeline */}
      <Timeline />

      {/* 6. Community Stats Row */}
      <StatsCounter />

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
