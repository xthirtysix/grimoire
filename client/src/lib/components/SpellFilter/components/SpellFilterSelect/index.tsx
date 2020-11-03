import React from 'react';
import { Select, Tag } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { SelectValue } from 'antd/lib/tree-select';
import { FormattedMessage } from 'react-intl';
// Maps
import { schoolToColor } from '../../../../maps';
// Styles
import s from './styles/SpellFilter.module.scss';

interface Props {
  filterType: string;
  options: { label: string; value: string }[];
  placeholderText: string;
  onChange: (values: SelectValue, type: string) => void;
  isSchool?: boolean;
}

export const SpellFilterSelect = ({
  filterType,
  options,
  placeholderText,
  onChange,
  isSchool,
}: Props): JSX.Element => {
  const tagRenderer = <T extends unknown>(props: { [key: string]: T }) => {
    const { closable, label, onClose, value } = props;
    const color = isSchool ? schoolToColor.get(value as string) : '';
    let icon;

    switch (filterType) {
      case 'castingTime':
        icon = <ClockCircleOutlined />;
        break;
      default:
        icon = null;
        break;
    }

    return (
      <Tag
        closable={closable as boolean}
        onClose={onClose as () => void}
        style={{ marginRight: 3 }}
        color={color}
      >
        {icon} {label}
      </Tag>
    );
  };

  return (
    <label className={s.filterSection}>
      <span style={{ fontWeight: 700 }}>
        <FormattedMessage
          id={`spell${filterType.charAt(0).toUpperCase()}${filterType.slice(1)}`}
        />
        :
      </span>
      <Select
        allowClear
        mode="multiple"
        onChange={(values) => onChange(values, filterType)}
        options={options}
        optionFilterProp="label"
        filterOption={(input: string, { label }: any): boolean =>
          label.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        tagRender={(props) => tagRenderer(props)}
        placeholder={placeholderText}
      />
    </label>
  );
};
