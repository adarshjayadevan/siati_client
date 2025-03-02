import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import OlderEvents from './pages/PastEvents';
import EventDetail from './pages/EventDetail';
import Title from './Title';
import About from './pages/About';
import Membership from './pages/Membership';
import MembershipForm from './pages/MembershipForm';
import ContactUs from './pages/Contact';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import Auth from './pages/admin/Auth';
import AdminEvents from './pages/admin/ViewEvents';
import AdminGallery from './pages/admin/ViewGallery';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Mangement from './pages/Mangement';
import ManagementNew from './pages/ManagementNew';
import PrezProfile from './components/PresidentProfile';
import Services from './pages/Servics';
import AdminNews from './pages/admin/ViewNews';
import AdminMemberships from './pages/admin/MembershipData';
import Documents from './pages/admin/Documents';
import Objectives from './components/Objectives';
import ObjectivesMain from './pages/ObjectivesMain';
import Trustees from './pages/Trustees';
import PromotionDetail from './pages/PromotionDetail';
import Exhibitors from './pages/Exhibitors';
import ExhibitorsNew from './pages/ExhibitorsNew';
import AdminExihibitors from './pages/admin/ViewExhibitors';
import Awards from './pages/Awards';
import Achievements from './pages/Achievements';
// import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <Title title={'Siati'}>
              <Home />
            </Title>
          } />
        <Route
          path='/gallery'
          element={
            <Title title={'Gallery | Siati'}>
              <Gallery />
            </Title>
          } />
        <Route
          path='/events'
          element={
            <Title title={'Events | Siati'}>
              <Events />
            </Title>
          } />
        <Route
          path='/awards'
          element={
            <Title title={'Awards | Siati'}>
              <Awards/>
            </Title>
          } />
          <Route
          path='/achievements'
          element={
            <Title title={'Awards | Siati'}>
              <Achievements/>
            </Title>
          } />
        <Route
          path='/events/:id'
          element={
            <Title title={'Events | Siati'}>
              <Events />
            </Title>
          } />
        <Route
          path='/pastevents'
          element={
            <Title title={'Past Events | Siati'}>
              <OlderEvents />
            </Title>
          } />
        {/* <Route
          path='/2024-fall-cost-principles-committee-meeting'
          element={
            <Title title={'Event | Siati'}>
              <EventDetail />
            </Title>
          } /> */}
        <Route
          path='/event/:id'
          element={
            <Title title={'Event | Siati'}>
              <EventDetail />
            </Title>
          } />
        <Route
          path='/objectives'
          element={
            <Title title={'Objectives | Siati'}>
              <ObjectivesMain />
            </Title>
          } />
        <Route
          path='/about'
          element={
            <Title title={'About | Siati'}>
              <About />
            </Title>
          } />
        <Route
          path='/membership'
          element={
            <Title title={'Membership | Siati'}>
              {/* <Membership /> */}
              <MembershipForm />
            </Title>
          } />
        <Route
          path='/contact'
          element={
            <Title title={'Contact | Siati'}>
              <ContactUs />
            </Title>
          } />
        <Route
          path='/news'
          element={
            <Title title={'News | Siati'}>
              <News />
            </Title>
          } />
        <Route
          path='/services'
          element={
            <Title title={'Servics | Siati'}>
              <Services />
            </Title>
          } />
        <Route
          path='/news/:id'
          element={
            <Title title={'News | Siati'}>
              <NewsDetail />
            </Title>
          } />
        <Route
          path='/promotions/:id'
          element={
            <Title title={'News | Siati'}>
              <PromotionDetail />
            </Title>
          } />
        <Route
          path='/exhibitors'
          element={
            <Title title={'Exhibitors | Siati'}>
              {/* <Exhibitors /> */}
              <ExhibitorsNew />
            </Title>
          } />
        {/* <Route
          path='/management'
          element={
            <Title title={'Management | Siati'}>
              <Mangement />
            </Title>
          } /> */}
        <Route
          path='/management'
          element={
            <Title title={'Management | Siati'}>
              {/* <ManagementNew /> */}
              <Trustees />
            </Title>
          } />
        {/* <Route
          path='/trustees'
          element={
            <Title title={'Management | Siati'}>
              <Trustees />
            </Title>
          } /> */}
        <Route
          path='/presidentprofile'
          element={
            <Title title={'President | Siati'}>
              <PrezProfile />
            </Title>
          } />
        {/* <Route
          path='/membershipform'
          element={
            <Title title={'Membership-Form | Siati'}>
              <MembershipForm />
            </Title>
          } /> */}


        {/* ADMIN */}
        <Route
          path='/admin/login'
          element={
            <Title title={'Siati'}>
              {/* <Auth> */}
              <Login />
              {/* </Auth> */}
            </Title>
          } />
        <Route
          path='/admin'
          element={
            <Title title={'Siati'}>
              <Auth>
                <Dashboard />
              </Auth>
            </Title>
          } />
        <Route
          path='/admin/events'
          element={
            <Title title={'Siati'}>
              <Auth>
                <AdminEvents />
              </Auth>
            </Title>
          } />
        <Route
          path='/admin/gallery'
          element={
            <Title title={'Siati'}>
              <Auth>
                <AdminGallery />
              </Auth>
            </Title>
          } />
        <Route
          path='/admin/news'
          element={
            <Title title={'Siati'}>
              <Auth>
                <AdminNews />
              </Auth>
            </Title>
          } />
        <Route
          path='/admin/members'
          element={
            <Title title={'Siati'}>
              <Auth>
                <AdminMemberships />
              </Auth>
            </Title>
          } />
        <Route
          path='/admin/exhibitors'
          element={
            <Title title={'Siati'}>
              <Auth>
                <AdminExihibitors />
              </Auth>
            </Title>
          } />
        <Route
          path='/admin/files'
          element={
            <Title title={'Siati'}>
              <Auth>
                <Documents />
              </Auth>
            </Title>
          } />
      </Routes>
    </Router>
  )
}

export default App
