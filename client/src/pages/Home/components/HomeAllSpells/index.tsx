import React from 'react';
import { Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import classnames from 'classnames';
//Styles
import s from './styles/HomeAllSpells.module.scss';
import home from '../../styles/Home.module.scss';

const { Text } = Typography;

export const HomeAllSpells = (): JSX.Element => {
  return (
    <section className={home.whiteBackground}>
      <h2 className="visually-hidden">All spells</h2>
      <div className={classnames(home.container, s.container)}>
        <p className={home.sectionHeader}>
          <FormattedMessage id="allSpellsHeader" />
        </p>
        <Text className={s.subtitle}>
          <FormattedMessage id="allSpellsSubheader" />
        </Text>
        <Link to="/spells">
          <Button type="primary" size="large">
            <FormattedMessage id="allSpellsButton" />
          </Button>
        </Link>
      </div>
    </section>
  );
};
