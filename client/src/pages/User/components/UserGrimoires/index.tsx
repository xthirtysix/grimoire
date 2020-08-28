import React from 'react'
import { Card, Typography, Empty, Button } from 'antd'
import { Link } from 'react-router-dom'
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
//Data
import { User } from '../../../../lib/graphql/queries/User/__generated__/User'
import { useMutation } from '@apollo/react-hooks'
import { DELETE_GRIMOIRE } from '../../../../lib/graphql/mutations'
import {
  DeleteGrimoire as DeleteGrimoireData,
  DeleteGrimoireVariables,
} from '../../../../lib/graphql/mutations/DeleteGrimoire/__generated__/DeleteGrimoire'
//Styles
import s from './styles/UserGrimoires.module.scss'

const { Title, Text } = Typography

interface Props {
  userGrimoires: User['user']['grimoires']
  viewerIsUser: boolean
}

export const UserGrimoires = ({ userGrimoires, viewerIsUser }: Props) => {
  const total = userGrimoires ? userGrimoires.total : null
  const result = userGrimoires ? userGrimoires.result : null

  const [deleteGrimoire] = useMutation<
    DeleteGrimoireData,
    DeleteGrimoireVariables
  >(DELETE_GRIMOIRE)

  const handleDeleteGrimoire = (id: string) => {
    deleteGrimoire({ variables: { id }, refetchQueries: ['User']})
  }

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
                    let value = cls.class ? (
                      <span className={s.cardCharacterClass} key={cls.class}>
                        <span>
                          {cls.class.charAt(0) +
                            cls.class.slice(1).toLowerCase()}
                        </span>
                        , level <span>{cls.level}</span>
                      </span>
                    ) : null
                    return value
                  })}
                </Text>
                <div className={s.cardButtonContainer}>
                  <a href={`/grimoire/${grimoire.id}`}>
                    <EyeOutlined />
                    View
                  </a>
                  {viewerIsUser ? (
                    <>
                      <a href={`/grimoire/${grimoire.id}`}>
                        <EditOutlined />
                        Edit
                      </a>
                      <button
                        type="button"
                        className={s.cardRemoveButton}
                        onClick={() => handleDeleteGrimoire(grimoire.id)}
                      >
                        <DeleteOutlined />
                        Remove
                      </button>
                    </>
                  ) : null}
                </div>
              </Card>
            </li>
          )
        })}
      </ul>
    ) : (
      <>
        <Empty
          className={s.empty}
          description="There'are no Grimoires in your library yet"
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
        <Link to="/spells">
          <Button type="primary" size="large">
            Create Grimoire
          </Button>
        </Link>
      </>
    )

  return <>{grimoireList}</>
}
