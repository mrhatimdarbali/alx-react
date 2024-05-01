import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: '40px',
  },
});

const BodySectionWithMarginBottom = ({ title, children }) => {
  return (
    <div className={css(styles.bodySectionWithMargin)}>
      <BodySection title={title}>{children}</BodySection>
    </div>
  );
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

BodySectionWithMarginBottom.defaultProps = {
  title: '',
  children: null,
};

export default BodySectionWithMarginBottom;
