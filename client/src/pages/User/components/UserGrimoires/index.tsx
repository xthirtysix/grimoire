import React from "react";
import { Card, Typography } from "antd";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
//Data
import { User } from "../../../../lib/graphql/queries/User/__generated__/User";
//Styles
import s from "../../styles/UserGrimoires.module.scss";

const { Title, Text } = Typography;

interface Props {
  userGrimoires: User["user"]["grimoires"];
}

export const UserGrimoires = ({ userGrimoires }: Props) => {
  const total = userGrimoires ? userGrimoires.total : null;
  const result = userGrimoires ? userGrimoires.result : null;

  const grimoireList =
    total && result ? (
      <ul className={s.grid}>
        {result.map((grimoire) => {
          return (
            <li key={grimoire.id}>
              <Card className={s.card}>
                <Title className={s.cardCharacterName} level={4}>
                  {grimoire.name}
                </Title>
                <Text>
                  {grimoire.characterClasses.map((cls) => {
                    return (
                      <span className={s.cardCharacterClass} key={cls.class}>
                        <span>
                          {cls.class.charAt(0).toUpperCase() +
                            cls.class.slice(1)}
                        </span>
                        , level <span>{cls.level}</span>
                      </span>
                    );
                  })}
                </Text>
                <div className={s.cardButtonContainer}>
                  <a href={`/grimoire/${grimoire.id}`}>
                    <EyeOutlined />
                    View
                  </a>
                  <a href={`/grimoire/${grimoire.id}`}>
                    <EditOutlined />
                    Edit
                  </a>
                  <button type="button" className={s.cardRemoveButton}>
                    <DeleteOutlined />
                    Remove
                  </button>
                </div>
              </Card>
            </li>
          );
        })}
      </ul>
    ) : null;

  return <>{grimoireList}</>;
};
