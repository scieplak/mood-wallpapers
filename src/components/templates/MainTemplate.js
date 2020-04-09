import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/mainTheme';
import Header from 'components/organisms/Header/Header';
import { connect } from 'react-redux';
import { fetchItems } from 'actions';
import { getDayPart, getSeason } from 'utils/helpers';

function MainTemplate({ children, fetchWallpapers }) {
  const currentDate = new Date();
  const keywords = [getDayPart(currentDate), getSeason(currentDate), 'nature'];

  useEffect(() => {
    fetchWallpapers(keywords);
  }, []);

  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <Header />
          {children}
        </>
      </ThemeProvider>
    </div>
  );
}

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  fetchWallpapers: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchWallpapers: (keywords) => dispatch(fetchItems(keywords)),
});
export default connect(null, mapDispatchToProps)(MainTemplate);
