import React from 'react'
import { Card, Button, Empty, Typography } from 'antd'
import { EditOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
//Data
import { DELETE_GRIMOIRE } from '../../../../lib/graphql/mutations'
import {
  DeleteGrimoire as DeleteGrimoireData,
  DeleteGrimoireVariables,
} from '../../../../lib/graphql/mutations/DeleteGrimoire/__generated__/DeleteGrimoire'
import { USER } from '../../../../lib/graphql/queries'
import { User } from '../../../../lib/graphql/queries/User/__generated__/User'
import { useMutation } from '@apollo/react-hooks'
//Styles
import s from './styles/UserGrimoires.module.scss'
import { displaySuccessMessage } from '../../../../lib/utils'

const { Text, Title } = Typography

interface Props {
  userGrimoires: User['user']['grimoires']
  viewerIsUser: boolean
  userId: string | null
}

export const UserGrimoires = ({ userGrimoires, viewerIsUser, userId }: Props) => {
  const total = userGrimoires ? userGrimoires.total : null
  const result = userGrimoires ? userGrimoires.result : null

  const [deleteGrimoire] = useMutation<
    DeleteGrimoireData,
    DeleteGrimoireVariables
  >(DELETE_GRIMOIRE, {
    onCompleted: () => {
      displaySuccessMessage('Grimoire successfully removed')
    },
    refetchQueries: [{ query: USER, variables: { id: userId } }],
    awaitRefetchQueries: true
  })

  const handleDeleteGrimoire = (id: string) => {
    deleteGrimoire({ variables: { id }})
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
