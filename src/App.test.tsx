import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './Views/Home';
import Analytics from './Views/Analytics';
import Enzyme from 'enzyme';
import { shallow, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import routeData from 'react-router';

Enzyme.configure({ adapter: new Adapter() });

// Test Shallow Render on All Components

describe('App Renders', () => {
  it('Home renders', () => {
    shallow(<App />);
  });
})

describe("Analytics Renders", () => {
  it("Analytics Renders", () => {
    shallow(<Analytics/>);
  });
});


describe('Views Renders', () => {
  it('Home renders', () => {
    shallow(<Home />);
  });
})

describe("Footer Renders", () => {
  it("Footer Renders", () => {
    shallow(<Footer/>);
  });
});

describe("Navbar Renders", () => {
  const mockLocation = {
    pathname: '/',
    hash: '',
    search: '',
    state: ''
  }
  beforeEach(() => {
    jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation)
  });
  it("Navbar Renders", () => {
    shallow(<Navbar/>);
  });
});

