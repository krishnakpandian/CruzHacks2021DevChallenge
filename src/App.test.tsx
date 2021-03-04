import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './Views/Home';
import Analytics from './Views/Analytics';
import Enzyme from 'enzyme';
import { shallow, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Views Renders', () => {
  it('App renders', () => {
    mount(<App />);
    const linkElement = screen.getByText(/CruzHacks 2021/i);
    expect(linkElement).toBeInTheDocument();
  })
})

jest.mock('react-router', () => ({
  ...jest.requireActual("react-router") as {},
  useLocation: jest.fn().mockImplementation(() => {
      return "localhost:3000/#/";
  })
}));



describe("Home Renders", () => {
  it("should render Home", () => {
    mount(<Home/>);
  });
});
