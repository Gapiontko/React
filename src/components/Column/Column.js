import React from 'react';
import styles from './Column.scss';
import Card from '../Card/Card.js';
import CardCreator from '../CardCreator/CardCreator.js'
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    icon: PropTypes.node,
    cards: PropTypes.array,
    addCard: PropTypes.func,
  };

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };

  state = {
    cards: this.props.cards || [],
  };
  
  addCard(title) {
    console.log(this);
    this.setState((state) => ({
      cards: [
        ...state.cards,
        {
          key: state.cards.length
            ? state.cards[state.cards.length - 1].key + 1
            : 0,
          title,
        },
      ],
    }));
  }

  render() {
  
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
          {title}
        </h3>
        <div>
          {this.state.cards.map((key, ...cardProps) => (
            <Card key={key} {...cardProps} />
          ))}
        </div>
        <div>
          <CardCreator text={settings.cardCreatorText} action={title => this.addCard(title)} />
        </div>
      </section>
    )
  }
}

export default Column;
