import React from 'react';
import { Card, Empty, Typography } from 'antd';
import { EditOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
//Data
import { DELETE_GRIMOIRE } from '../../../../lib/graphql/mutations';
import {
  DeleteGrimoire as DeleteGrimoireData,
  DeleteGrimoireVariables,
} from '../../../../lib/graphql/mutations/DeleteGrimoire/__generated__/DeleteGrimoire';
import { USER } from '../../../../lib/graphql/queries';
import { User } from '../../../../lib/graphql/queries/User/__generated__/User';
import { useMutation } from '@apollo/react-hooks';
//Styles
import s from './styles/UserGrimoires.module.scss';
import { displaySuccessMessage } from '../../../../lib/utils';

const { Text, Title } = Typography;

interface Props {
  userGrimoires: User['user']['grimoires'];
  viewerIsUser: boolean;
  userId: string | null;
}

export const UserGrimoires = ({
  userGrimoires,
  viewerIsUser,
  userId,
}: Props): JSX.Element => {
  const intl = useIntl();

  const total = userGrimoires ? userGrimoires.total : null;
  const result = userGrimoires ? userGrimoires.result : null;

  const [deleteGrimoire] = useMutation<DeleteGrimoireData, DeleteGrimoireVariables>(
    DELETE_GRIMOIRE,
    {
      onCompleted: () => {
        displaySuccessMessage(intl.formatMessage({ id: 'grimoireDeleteMsg' }));
      },
      refetchQueries: [{ query: USER, variables: { id: userId } }],
      awaitRefetchQueries: true,
    }
  );

  const handleDeleteGrimoire = (id: string) => {
    deleteGrimoire({ variables: { id } }).then();
  };

  const grimoireList =
    total && result ? (
      <ul className={s.grid}>
        {result.map((grimoire) => {
          return (
            <li key={grimoire.id} className={s.gridItem}>
              <Card className={s.card}>
                <Title className={s.cardCharacterName} level={4}>
                  {grimoire.name}
                </Title>
                <Text className={s.cardClasses}>
                  {grimoire.characterClasses.map((cls) => {
                    return cls.class ? (
                      <span
                        className={s.cardCharacterClass}
                        key={grimoire.name + cls.class}
                      >
                        <span>
                          <FormattedMessage id={cls.class} />
                        </span>
                        , {intl.formatMessage({ id: 'spellLevel' }).toLowerCase()}&nbsp;
                        <span>{cls.level}</span>
                      </span>
                    ) : null;
                  })}
                </Text>
                <div className={s.cardButtonContainer}>
                  <Link to={`/grimoire/${grimoire.id}`}>
                    <EyeOutlined />
                    <FormattedMessage id="grimoireView" />
                  </Link>
                  {viewerIsUser ? (
                    <>
                      <Link to={`/grimoire/${grimoire.id}/edit`}>
                        <EditOutlined />
                        <FormattedMessage id="grimoireEdit" />
                      </Link>
                      <button
                        type="button"
                        className={s.cardRemoveButton}
                        onClick={() => handleDeleteGrimoire(grimoire.id)}
                      >
                        <DeleteOutlined />
                        <FormattedMessage id="grimoireRemove" />
                      </button>
                    </>
                  ) : null}
                </div>
              </Card>
            </li>
          );
        })}
      </ul>
    ) : (
      <Empty
        className={s.empty}
        description={intl.formatMessage({ id: 'grimoiresEmpty' })}
        image={Empty.PRESENTED_IMAGE_SIMPLE}
      />
    );

  return <>{grimoireList}</>;
};
