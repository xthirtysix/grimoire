import React from 'react';
import { Typography } from 'antd';
import { Link } from 'react-scroll';
import { FormattedMessage } from 'react-intl';
import classnames from 'classnames';
//Styles
import home from '../../styles/Home.module.scss';
import s from './styles/HomeWhyRegister.module.scss';

const { Title, Text } = Typography;

export const HomeWhyRegister = (): JSX.Element => {
  return (
    <section className={classnames(home.container, s.container)}>
      <Title level={2} className={s.header}>
        <FormattedMessage id="whyRegisterHeader" />
        <span className="visually-hidden">Why register?</span>
      </Title>
      <Text className={s.subheader} type="secondary">
        <FormattedMessage id="whyRegisterSubheader" />
      </Text>
      <Text>
        <FormattedMessage
          id="whyRegisterParagraphOne"
          values={{ strong: <FormattedMessage id="whyRegisterParagraphOneStrong" /> }}
        />
      </Text>
      <Text>
        <FormattedMessage
          id="whyRegisterParagraphTwo"
          values={{
            link: (
              <Link
                activeClass="active"
                to="wave"
                spy={true}
                smooth={true}
                duration={1000}
              >
                <FormattedMessage id="whyRegisterParagraphTwoLink" />
              </Link>
            ),
          }}
        />
      </Text>
    </section>
  );
};
