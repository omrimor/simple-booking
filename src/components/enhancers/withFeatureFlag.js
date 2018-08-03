import React from 'react';
import { connect } from 'react-redux';
import { selectFeatureFlag } from 'redux/ui/selectors';

export default function withFeatureFlag(featureNamespace) {
  return function createFeatureFlag(ComponentOnPass, ComponentOnFail) {
    class WithFeatureFlag extends React.Component {
      render() {
        const { featureFlag } = this.props;
        return (
          featureFlag
          ? <ComponentOnPass {...this.props} />
          : ComponentOnFail
            ? <ComponentOnFail {...this.props}/>
            : null
        );
      }
    }
    WithFeatureFlag.displayName = `withFeatureFlag(${featureNamespace})`;

    const mapStateToProps = (state) => ({
    featureFlag: selectFeatureFlag(state, featureNamespace)
    });

    return connect(mapStateToProps, {})(WithFeatureFlag)
  }
}

