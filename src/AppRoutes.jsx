import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ResumePage from './pages/ResumePage'
import PortfolioPage from './pages/PortfolioPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import DashboardPage from './pages/DashboardPage'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
    )
}

export default AppRoutes