import React, { useState } from 'react'
import {
  Button,
  Card,
  Divider,
  Form,
  Input,
  InputNumber,
  Select,
  Spin,
  Typography,
} from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { Link, Redirect } from 'react-router-dom'
import { displaySuccessMessage, displayErrorMessage } from '../../lib/utils'
// Data
import { CREATE_GRIMOIRE } from '../../lib/graphql/mutations'
import {
  CreateGrimoire as CreateGrimoireData,
  CreateGrimoireVariables,
} from '../../lib/graphql/mutations/CreateGrimoire/__generated__/CreateGrimoire'
import { USER } from '../../lib/graphql/queries'
import { useMutation } from '@apollo/react-hooks'
import { Viewer } from '../../lib/types'
// Styles
import s from './styles/CreateGrimoire.module.scss'
// Constants
import { CLASS_FILTER_OPTIONS } from '../../lib/constants'

const { Item, List } = Form
const { Title, Text } = Typography

interface CharacterClass {
  class?: string
  level?: number
}

interface Props {
  viewer: Viewer
}

export const CreateGrimoire = ({ viewer }: Props) => {
  const [form] = Form.useForm()
  const [options, setOptions] = useState<any>(CLASS_FILTER_OPTIONS)
  const [totalLevel, setTotalLevel] = useState<number>(0)

  const [createGrimoire, { loading, data }] = useMutation<
    CreateGrimoireData,
    CreateGrimoireVariables
  >(CREATE_GRIMOIRE, {
    onCompleted: (data) => {
      displaySuccessMessage(
        `Grimoire ${data.createGrimoire.name} successfully created`
      )
    },
    onError: () => {
      displayErrorMessage(
        `Grimoire was not created. Check your internet connection or try again later`
      )
    },
    refetchQueries: [{ query: USER, variables: { id: viewer.id } }],
    awaitRefetchQueries: true,
  })

  const onSelectChange = () => {
    setOptions(
      CLASS_FILTER_OPTIONS.filter(({ value }: { value: any }) => {
        return (
          form
            .getFieldsValue(['characterClasses'])
            .characterClasses.map((cls: CharacterClass) => {
              return cls ? cls.class : null
            })
            .indexOf(value) === -1
        )
      })
    )
  }

  const onLevelChange = () => {
    setTotalLevel(
      Object.values<number>(
        form
          .getFieldsValue(['characterClasses'])
          .characterClasses.map(({ level }: { level: number }) => {
            return level ? level : 0
          })
      ).reduce(
        (accumulator: number, currentValue: number) =>
          accumulator + currentValue
      )
    )
  }

  const onFinish = (values: any) => {
    const classFields = form.getFieldsValue(['characterClasses'])
      .characterClasses

    if (classFields === undefined || !classFields.length) {
      displayErrorMessage('Please add at least one class')
      return
    }

    const characterClasses: CharacterClass[] = []


    values.characterClasses.map((charClass: CharacterClass) => {
      const uppercased = charClass.class ? charClass.class.toUpperCase() : undefined 
    
      return characterClasses.push({
        ...charClass,
        class: uppercased
      })
    })

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
    return (
      <Spin
        wrapperClassName="container"
        className="centered"
        tip="Creating grimoire..."
      />
    )
  }

  if (data && data.createGrimoire) {
    return <Redirect to={`/user/${viewer.id}`} />
  }

  if (!viewer.id) {
    return (
      <Card className="form-container">
        <Title level={3}>You'll have to be signed in to create Grimoire.</Title>
        <Text type="secondary">
          You... shall... not... pass! Until signing in. You can do that at{' '}
          <Link to="/login">login</Link> page, and try again after.
        </Text>
      </Card>
    )
  }

  return (
    <>
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
          form={form}
          layout="horizontal"
          name="create_grimoire_from"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{ level: 1 }}
        >
          <Item
            name="name"
            label="Name"
            extra="Max length of 30 characters"
            rules={[
              {
                required: true,
                message: 'Please enter valid name under 30 characters',
              },
            ]}
          >
            <Input maxLength={30} placeholder="Type 'Elminster Aumar'" />
          </Item>
          <Divider />

          <List name="characterClasses">
            {(fields, { add, remove }) => {
              return (
                <>
                  {fields.map((field, idx) => (
                    <React.Fragment key={field.key}>
                      <div className={s.classSelect}>
                        <Item
                          noStyle
                          shouldUpdate={(prevValues, curValues) =>
                            prevValues.class !== curValues.class ||
                            prevValues.level !== curValues.level
                          }
                        >
                          {() => (
                            <Item
                              {...field}
                              {...idx}
                              label="Class"
                              name={[field.name, 'class']}
                              fieldKey={[field.fieldKey, 'class']}
                              rules={[
                                { required: true, message: 'Missing class' },
                              ]}
                            >
                              <Select
                                options={options}
                                onChange={onSelectChange}
                                optionFilterProp="label"
                              />
                            </Item>
                          )}
                        </Item>
                        <Item
                          {...field}
                          label="Level"
                          name={[field.name, 'level']}
                          fieldKey={[field.fieldKey, 'level']}
                          rules={[{ required: true, message: 'Missing level' }]}
                        >
                          <InputNumber
                            min={1}
                            max={20}
                            required
                            onChange={onLevelChange}
                          />
                        </Item>

                        <MinusCircleOutlined
                          aria-label="delete class"
                          onClick={() => {
                            remove(field.name)
                            onSelectChange()
                          }}
                        />
                      </div>
                      <Divider />
                    </React.Fragment>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => {
                        add()
                      }}
                      block
                    >
                      <PlusOutlined /> Add class
                    </Button>
                  </Form.Item>
                </>
              )
            }}
          </List>
          {totalLevel > 20 && (
            <Text type="danger">
              Your characters total level is {totalLevel}, wich may not be
              allowed for a general game
            </Text>
          )}
          <Item className={s.submitContainer}>
            <Button className={s.submitButton} type="primary" htmlType="submit">
              Submit
            </Button>
          </Item>
        </Form>
      </Card>
    </>
  )
}
