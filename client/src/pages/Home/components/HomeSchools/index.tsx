import React from 'react';
import { Card, Input } from 'antd';
import {
  BlockOutlined,
  EnvironmentOutlined,
  EyeOutlined,
  FireOutlined,
  SafetyOutlined,
  StarOutlined,
  StopOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
//Styles
import schools from './styles/HomeSchools.module.scss';
import home from '../../styles/Home.module.scss';

const { Search } = Input;

interface Props {
  onSearch: (value: string) => void;
}

export const HomeSchools = ({ onSearch }: Props): JSX.Element => {
  const intl = useIntl();

  return (
    <section className={schools.container}>
      <h2 className="visually-hidden">Spell Schools</h2>
      <div className="container">
        <div>
          <p className={home.sectionHeader}>
            <FormattedMessage id="headerMain" />
          </p>
          <Search
            placeholder={intl.formatMessage({ id: 'mainSearchPlaceholder' })}
            size="large"
            enterButton
            className={schools.search}
            onSearch={onSearch}
          />
        </div>
        <ul className={schools.list}>
          <li>
            <Link to="/spells/illusion">
              <Card
                className={schools.illusion}
                cover={<EyeOutlined className={schools.icon} />}
              >
                <FormattedMessage id="ILLUSION" />
              </Card>
            </Link>
          </li>
          <li>
            <Link to="/spells/conjuration">
              <Card
                className={schools.conjuration}
                cover={<EnvironmentOutlined className={schools.icon} />}
              >
                <FormattedMessage id="CONJURATION" />
              </Card>
            </Link>
          </li>
          <li>
            <Link to="/spells/necromancy">
              <Card
                className={schools.necromancy}
                cover={<StopOutlined className={schools.icon} />}
              >
                <FormattedMessage id="NECROMANCY" />
              </Card>
            </Link>
          </li>{' '}
          <li>
            <Link to="/spells/divination">
              <Card
                className={schools.divination}
                cover={<ThunderboltOutlined className={schools.icon} />}
              >
                <FormattedMessage id="DIVINATION" />
              </Card>
            </Link>
          </li>
          <li>
            <Link to="/spells/evocation">
              <Card
                className={schools.evocation}
                cover={<FireOutlined className={schools.icon} />}
              >
                <FormattedMessage id="EVOCATION" />
              </Card>
            </Link>
          </li>
          <li>
            <Link to="/spells/enchantment">
              <Card
                className={schools.enchantment}
                cover={<StarOutlined className={schools.icon} />}
              >
                <FormattedMessage id="ENCHANTMENT" />
              </Card>
            </Link>
          </li>
          <li>
            <Link to="/spells/abjuration">
              <Card
                className={schools.abjuration}
                cover={<SafetyOutlined className={schools.icon} />}
              >
                <FormattedMessage id="ABJURATION" />
              </Card>
            </Link>
          </li>
          <li>
            <Link to="/spells/transmutation">
              <Card
                className={schools.transmutation}
                cover={<BlockOutlined className={schools.icon} />}
              >
                <FormattedMessage id="TRANSMUTATION" />
              </Card>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
