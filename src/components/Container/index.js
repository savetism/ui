import React from "react";
import PropTypes from "prop-types";
import { Container as SUIRContainer } from "@infinitecsolutions/semantic-ui-react";

const Container = props => {
  return <SUIRContainer {...props} />;
};

Container.propTypes = {
  /** Container has no maximum width. */
  fluid: PropTypes.bool,

  /** Reduce maximum width to more naturally accommodate text. */
  text: PropTypes.bool,

  /** Align container text. */
  textAlign: PropTypes.oneOf(["left", "center", "right", "justified"])
};

Container.displayName = "Container";

export default Container;
