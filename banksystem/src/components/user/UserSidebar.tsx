'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  FaCreditCard,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import Image from "next/image";

const UserSidebar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { icon: <FaCreditCard />, label: 'Historial Movimientos', path: '/users/filters_mov' },
   ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div
      style={{
        width: isOpen ? '260px' : '80px',
        height: '100vh',
        background: 'linear-gradient(to bottom, #1e1e2f, #23233a)',
        color: '#fff',
        transition: 'width 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 10px',
        position: 'relative',
        zIndex: 1000,
      }}
    >
      {/* Botón Toggle */}
      <button
        onClick={toggleSidebar}
        style={{
          position: 'absolute',
          top: '20px',
          right: isOpen ? '-15px' : '-15px',
          background: '#4392F1',
          border: 'none',
          borderRadius: '50%',
          width: '30px',
          height: '30px',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 0 5px rgba(0,0,0,0.2)',
          transition: 'transform 0.3s ease',
        }}
      >
        {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
      </button>

      {/* Avatar */}
      <div className="text-center mb-4" style={{ display: isOpen ? 'block' : 'none' }}>
      <Image
          src="/assets/avatar.jpg"
          alt="Usuario Avatar"
          width={90}
          height={90}
          style={{
            objectFit: 'cover',
            borderRadius: '50%',
            border: '3px solid #4392F1',
            margin: '0 auto',
          }}
        />
        <h5 className="mt-3 mb-1"></h5>
        <p style={{ color: '#ECE8EF', fontSize: '14px' }}>Usuario</p>
      </div>

      {/* Menú */}
      <nav className="flex-grow-1">
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => router.push(item.path)}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px',
                marginBottom: '10px',
                borderRadius: '10px',
                cursor: 'pointer',
                backgroundColor: 'transparent',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#4392F1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <span style={{ fontSize: '18px', marginRight: isOpen ? '12px' : '0', color: '#fff' }}>
                {item.icon}
              </span>
              {isOpen && <span style={{ whiteSpace: 'nowrap' }}>{item.label}</span>}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default UserSidebar;