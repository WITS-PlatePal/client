import React, { Component } from "react";
import MetricBtn from "../../../component/MetricBtn/MetricBtn";
import messages from "../../../constant/messages";
import BigRedBtn from "../../../component/BigRedBtn/BigRedBtn";
import styles from "./Metrics.module.scss";
import { withRouter } from "react-router";
import path from "../../../constant/routes";

class Metrics extends Component {
  state = {
    selectedId: 1,
  };

  toggleSelectedBtn = (value) => {
    this.setState({
      selectedId: value,
    });
  };

  render() {
    return (
      <div className={styles.metricsPage}>
        <h3 className={styles.heading}>{messages.metricsPageHeading}</h3>
        <div className={styles.metricBtns}>
          <MetricBtn
            selected={this.state.selectedId === 1}
            label={messages.US}
            subLabel={messages.USExamples}
            click={() => {
              this.toggleSelectedBtn(1);
            }}
          />
          <MetricBtn
            label={messages.metric}
            subLabel={messages.metricExamples}
            selected={this.state.selectedId === 2}
            click={() => {
              this.toggleSelectedBtn(2);
            }}
          />
        </div>

        <BigRedBtn
          styles={styles.redBtn}
          value={messages.next}
          onClick={() => {
            this.props.history.push(path.profile);
          }}
        />
        {/* TODO: Add onclick to the function e.g. onClick={() => this.updateMetric(this.state.selectedId)} but one that works */}
      </div>
    );
  }
}

export default withRouter(Metrics);
