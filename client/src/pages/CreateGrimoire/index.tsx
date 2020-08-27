import React from 'react'
import {
  Typography,
  Form,
  Button,
  Input,
  Select,
  InputNumber,
  Card,
  Divider,
} from 'antd'
import { Link, Redirect } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
//Data
import { Viewer } from '../../lib/types'
import { ClassType } from '../../lib/graphql/globalTypes'
import { CREATE_GRIMOIRE } from '../../lib/graphql/mutations'
import {
  CreateGrimoire as CreateGrimoireData,
  CreateGrimoireVariables,
} from '../../lib/graphql/mutations/CreateGrimoire/__generated__/CreateGrimoire'
//Styles
import s from './styles/CreateGrimoire.module.scss'

const { Title, Text } = Typography
const { Item } = Form
const { Option } = Select

interface Props {
  viewer: Viewer
}

export const CreateGrimoire = ({ viewer }: Props) => {
  const [form] = Form.useForm()

  const [createGrimoire, { loading, data }] = useMutation<
    CreateGrimoireData,
    CreateGrimoireVariables
  >(CREATE_GRIMOIRE)

  const onFinish = (values: any) => {
    const characterClasses = [
      {
        class: values.class,
        level: values.level,
      },
    ]

    const input = {
      name: values.name,
      characterClasses,
    }

    createGrimoire({
      variables: {
        input,
      },
    })
  }

  const onFinishFailed = ({ errorFields }: any) => {
    form.scrollToField(errorFields[0].name)
  }

  if (loading) {
    return <h3>We are creating your grimoire right now</h3>
  }

  if (data && data.createGrimoire) {
    return <Redirect to={`/user`} />
  }

  if (!viewer.id) {
    return (
      <Card className="form-container">
        <Title level={3}>You'll have to be signed in to create Grimoire.</Title>
        <Text type="secondary">
          You... shall... not... pass! Untill signing in. You can do that at{' '}
          <Link to="/login">login</Link> page, and try again after.
        </Text>
      </Card>
    )
  }

  return (
    <div className={s.container}>
      <div className={s.title}>
        <Title level={3}>
          Welcome, spellcaster! Let's create your own Grimoire!
        </Title>
        <Text type="secondary">
          In this form we'll collect some information, to fill title page of the
          Grimoire.
        </Text>
      </div>
      <Card className="form-container">
        <Form
          layout="horizontal"
          name="create_grimoire_from"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{ level: 1 }}
        >
          <Item
            name="name"
            label="Name"
            extra="Max length of 20 characters"
            rules={[
              {
                required: true,
                message: 'Please enter valid name under 20 characters',
              },
            ]}
          >
            <Input maxLength={20} placeholder="Type 'Elminster Aumar'" />
          </Item>
          <Divider />
          <div className={s.classSelect}>
            <Item
              name="class"
              label="Class"
              extra="Choose character class"
              rules={[
                {
                  required: true,
                  message: 'Please choose a class from the list',
                },
              ]}
            >
              <Select
                showSearch
                placeholder="Type 'Wizard'"
                optionFilterProp="children"
              >
                <Option value={ClassType.BARBARIAN}>Barbarian</Option>
                <Option value={ClassType.BARD}>Bard</Option>
                <Option value={ClassType.CLERIC}>Cleric</Option>
                <Option value={ClassType.DRUID}>Druid</Option>
                <Option value={ClassType.FIGHTER}>Fighter</Option>
                <Option value={ClassType.MONK}>Monk</Option>
                <Option value={ClassType.PALADIN}>Paladin</Option>
                <Option value={ClassType.RANGER}>Ranger</Option>
                <Option value={ClassType.ROGUE}>Rogue</Option>
                <Option value={ClassType.SORCERER}>Sorcerer</Option>
                <Option value={ClassType.WARLOCK}>Warlock</Option>
                <Option value={ClassType.WIZARD}>Wizard</Option>
              </Select>
            </Item>
            <Item
              name="level"
              label="Level"
              extra="Up to 20"
              rules={[
                {
                  required: true,
                  message:
                    'Please enter character level from 1 to 20 in chosen class',
                },
              ]}
            >
              <InputNumber min={1} max={20} />
            </Item>
          </div>
          <Item className={s.submitContainer}>
            <Button className={s.submitButton} type="primary" htmlType="submit">
              Submit
            </Button>
          </Item>
        </Form>
      </Card>
    </div>
  )
}
