import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
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
} from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Link, Redirect } from 'react-router-dom';
import { displayErrorMessage, displaySuccessMessage } from '../../lib/utils';
// Data
import { CREATE_GRIMOIRE } from '../../lib/graphql/mutations';
import {
  CreateGrimoire as CreateGrimoireData,
  CreateGrimoireVariables,
} from '../../lib/graphql/mutations/CreateGrimoire/__generated__/CreateGrimoire';
import { USER } from '../../lib/graphql/queries';
import { useMutation } from '@apollo/react-hooks';
import { Viewer } from '../../lib/types';
// Styles
import s from './styles/CreateGrimoire.module.scss';
// Constants
import { CLASSES } from '../../lib/constants';

const { Item, List } = Form;
const { Title, Text } = Typography;

interface CharacterClass {
  class?: string;
  level?: number;
}

interface ClassInput {
  class: {
    value: string;
    label: string;
    key: string;
  };
  level: number;
}

interface FormData {
  name: string;
  characterClasses: ClassInput[];
}

interface Props {
  viewer: Viewer;
}

export const CreateGrimoire = ({ viewer }: Props): JSX.Element => {
  const intl = useIntl();
  const [form] = Form.useForm();
  const [options, setOptions] = useState<string[]>(CLASSES);
  const [totalLevel, setTotalLevel] = useState<number>(0);

  const [createGrimoire, { loading, data }] = useMutation<
    CreateGrimoireData,
    CreateGrimoireVariables
  >(CREATE_GRIMOIRE, {
    onCompleted: (data) => {
      displaySuccessMessage(
        intl.formatMessage(
          {
            id: 'createGrimoireSubmitSuccess',
          },
          {
            name: data.createGrimoire.name,
          }
        )
      );
    },
    onError: () => {
      displayErrorMessage(intl.formatMessage({ id: 'createGrimoireSubmitError' }));
    },
    refetchQueries: [{ query: USER, variables: { id: viewer.id } }],
    awaitRefetchQueries: true,
  });

  const updateOptions = () => {
    const values = Object.values(
      form
        .getFieldsValue(['characterClasses'])
        .characterClasses.map((cls: CharacterClass) => {
          return cls ? cls.class : null;
        })
    ).map((item: any): string => {
      return item.value;
    });

    setOptions(
      CLASSES.filter((option: string) => {
        return !~values.indexOf(option);
      })
    );
  };

  const onSelectChange = () => {
    updateOptions();
  };

  const onLevelChange = () => {
    setTotalLevel(
      Object.values<number>(
        form
          .getFieldsValue(['characterClasses'])
          .characterClasses.map(({ level }: { level: number }) => {
            return level ? level : 0;
          })
      ).reduce((accumulator: number, currentValue: number) => accumulator + currentValue)
    );
  };

  const onFinish = (v: FormData) => {
    const classFields = form.getFieldsValue(['characterClasses']).characterClasses;

    if (classFields === undefined || !classFields.length) {
      displayErrorMessage(intl.formatMessage({ id: 'addClassError' }));
      return;
    }

    const characterClasses: CharacterClass[] = [];

    v.characterClasses.map((charClass: ClassInput) => {
      const cls = charClass.class ? charClass.class.value : undefined;

      return characterClasses.push({
        ...charClass,
        class: cls,
      });
    });

    const input = {
      name: v.name,
      characterClasses,
    };

    createGrimoire({
      variables: {
        input,
      },
    }).then();
  };

  const onFinishFailed = ({ errorFields }: any) => {
    form.scrollToField(errorFields[0].name);
  };

  if (loading) {
    return (
      <Spin
        wrapperClassName="container"
        className="centered"
        tip={intl.formatMessage({ id: 'createGrimoireSpinner' })}
      />
    );
  }

  if (data && data.createGrimoire) {
    return <Redirect to={`/user/${viewer.id}`} />;
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
    );
  }

  return (
    <>
      <div className={s.title}>
        <Title level={3}>
          <FormattedMessage id="createGrimoireHeader" />
        </Title>
        <Text type="secondary">
          <FormattedMessage id="createGrimoireFormDescription" />
        </Text>
      </div>
      <Card className="form-container">
        <Form
          form={form}
          layout="horizontal"
          name="create_grimoire_from"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Item
            name="name"
            label={intl.formatMessage({ id: 'createGrimoireFormName' })}
            extra={intl.formatMessage({ id: 'createGrimoireFormNameExtra' })}
            rules={[
              {
                required: true,
                message: intl.formatMessage({ id: 'createGrimoireFormNameError' }),
              },
            ]}
          >
            <Input
              maxLength={30}
              placeholder={intl.formatMessage({
                id: 'createGrimoireFormNamePlaceholder',
              })}
            />
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
                              label={intl.formatMessage({ id: 'spellClass' })}
                              fieldKey={[field.fieldKey, 'class']}
                              name={[field.name, 'class']}
                              initialValue={{ value: options[idx] }}
                              rules={[
                                {
                                  required: true,
                                  message: intl.formatMessage({
                                    id: 'createGrimoireFormClassError',
                                  }),
                                },
                              ]}
                            >
                              <Select
                                onChange={onSelectChange}
                                showSearch
                                labelInValue
                                options={options.map((option) => {
                                  return {
                                    value: option,
                                    label: intl.formatMessage({ id: option }),
                                  };
                                })}
                                optionFilterProp="label"
                                optionLabelProp="label"
                              />
                            </Item>
                          )}
                        </Item>
                        <Item
                          {...field}
                          label={intl.formatMessage({ id: 'spellLevel' })}
                          name={[field.name, 'level']}
                          fieldKey={[field.fieldKey, 'level']}
                          initialValue={1}
                          rules={[
                            {
                              required: true,
                              message: intl.formatMessage({
                                id: 'createGrimoireFormLevelError',
                              }),
                            },
                          ]}
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
                            remove(field.name);
                            onSelectChange();
                          }}
                        />
                      </div>
                      <Divider />
                    </React.Fragment>
                  ))}
                  <Item>
                    <Button
                      type="dashed"
                      onClick={() => {
                        add();
                      }}
                      block
                    >
                      <PlusOutlined /> <FormattedMessage id="addClassBtn" />
                    </Button>
                  </Item>
                </>
              );
            }}
          </List>
          {totalLevel > 20 && (
            <Text type="danger">
              <FormattedMessage id="levelTooHigh" values={{ totalLevel }} />
            </Text>
          )}
          <Item className={s.submitContainer}>
            <Button className={s.submitButton} type="primary" htmlType="submit">
              <FormattedMessage id="submit" />
            </Button>
          </Item>
        </Form>
      </Card>
    </>
  );
};
