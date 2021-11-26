import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SiteOrigin from '../../ui/site-origin/site-origin';
import Chip from '../../ui/chip';

export default class PermissionsConnectHeader extends Component {
  static propTypes = {
    icon: PropTypes.string,
    iconName: PropTypes.string.isRequired,
    siteOrigin: PropTypes.string.isRequired,
    headerTitle: PropTypes.node,
    headerText: PropTypes.string,
    npmLabel: PropTypes.string
  };

  static defaultProps = {
    icon: null,
    headerTitle: '',
    headerText: '',
  };

  renderHeaderIcon() {
    const { icon, iconName, siteOrigin } = this.props;

    return (
      <div className="permissions-connect-header__icon">
        <SiteOrigin siteOrigin={siteOrigin} iconSrc={icon} name={iconName} />
      </div>
    );
  }

  render() {
    const { headerTitle, headerText, npmLabel } = this.props;
    return (
      <div className="permissions-connect-header">
        {this.renderHeaderIcon()}
        <div className="permissions-connect-header__title">{headerTitle}</div>
        {npmLabel ? <Chip label={npmLabel} /> : null}
        <div className="permissions-connect-header__subtitle">{headerText}</div>
      </div>
    );
  }
}
