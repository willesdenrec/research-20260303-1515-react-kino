/**
 * Basic React-Kino Scene Example
 * 
 * This example demonstrates the core React-Kino components:
 * - Kino: Root scroll tracking provider
 * - Scene: Pinned scroll section
 * - Reveal: Scroll-triggered animations
 * - Counter: Animated number counting
 */

import React from 'react';
import { Kino, Scene, Reveal, Counter } from 'react-kino';

function BasicSceneExample() {
  return (
    <Kino>
      {/* Hero Section - 300vh scroll duration */}
      <Scene duration="300vh">
        {(progress) => (
          <div style={{
            height: '100vh',
            display: 'grid',
            placeItems: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            position: 'relative'
          }}>
            {/* Title fades in at start */}
            <Reveal animation="fade-up" at={0}>
              <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                React-Kino Demo
              </h1>
            </Reveal>
            
            {/* Subtitle scales in at 30% scroll */}
            <Reveal animation="scale" at={0.3}>
              <p style={{ fontSize: '1.5rem', opacity: 0.8 }}>
                Cinematic scroll experiences for React
              </p>
            </Reveal>
            
            {/* Counter animates from 60% to 90% scroll */}
            <Reveal animation="fade" at={0.6}>
              <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <Counter 
                  from={0} 
                  to={10000} 
                  at={0.6}
                  span={0.3}
                  format={(n) => `${n.toLocaleString()}+ users`}
                  style={{ fontSize: '2rem', fontWeight: 'bold' }}
                />
                <p style={{ opacity: 0.7, marginTop: '0.5rem' }}>
                  Already enjoying scroll-driven storytelling
                </p>
              </div>
            </Reveal>
            
            {/* Scroll progress indicator */}
            <div style={{
              position: 'absolute',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(255,255,255,0.1)',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.9rem'
            }}>
              Scroll progress: {Math.round(progress * 100)}%
            </div>
          </div>
        )}
      </Scene>
      
      {/* Features Section - 400vh scroll duration */}
      <Scene duration="400vh">
        <div style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#f8fafc',
          padding: '2rem'
        }}>
          <Reveal animation="fade-up" at={0.1}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: '#1e293b' }}>
              Key Features
            </h2>
          </Reveal>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            width: '100%',
            maxWidth: '1200px'
          }}>
            {[
              {
                title: 'Tiny Bundle',
                description: 'Core engine under 1KB gzipped',
                icon: '⚡',
                color: '#10b981'
              },
              {
                title: 'Declarative API',
                description: 'Compose like regular React components',
                icon: '🎨',
                color: '#3b82f6'
              },
              {
                title: 'SSR Safe',
                description: 'Renders on server, animates on client',
                icon: '🚀',
                color: '#8b5cf6'
              }
            ].map((feature, index) => (
              <Reveal 
                key={feature.title}
                animation="fade-up" 
                at={0.2 + (index * 0.1)}
                duration={800}
              >
                <div style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '2rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  border: `2px solid ${feature.color}20`,
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '1rem'
                  }}>
                    {feature.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    marginBottom: '0.5rem',
                    color: feature.color
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    color: '#64748b',
                    lineHeight: '1.6'
                  }}>
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Scene>
      
      {/* Stats Section - 200vh scroll duration */}
      <Scene duration="200vh">
        <div style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          color: 'white',
          gap: '4rem',
          flexWrap: 'wrap'
        }}>
          {[
            { label: 'Bundle Size', value: 1, suffix: 'KB', description: 'gzipped' },
            { label: 'Components', value: 12, suffix: '+', description: 'ready to use' },
            { label: 'Browser Support', value: 95, suffix: '%', description: 'modern browsers' },
            { label: 'NPM Downloads', value: 50, suffix: 'K+', description: 'monthly' }
          ].map((stat, index) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <Reveal animation="scale" at={0.1 + (index * 0.1)}>
                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#60a5fa' }}>
                  <Counter
                    from={0}
                    to={stat.value}
                    at={0.2 + (index * 0.1)}
                    span={0.3}
                    format={(n) => `${n}${stat.suffix}`}
                  />
                </div>
                <div style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '0.25rem' }}>
                  {stat.description}
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </Scene>
    </Kino>
  );
}

export default BasicSceneExample;