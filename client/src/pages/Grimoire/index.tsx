import React, { useEffect, useState } from 'react'
import { Affix, Divider, Empty, Layout } from 'antd'
import { EditOutlined, SaveOutlined } from '@ant-design/icons'
import { GrimoireDetailes, GrimoireDetailesSkeleton } from './components'
import {
  SpellFilter,
  SpellList,
  SpellSort,
  SpellListSkeleton,
} from '../../lib/components'
import {
  Link,
  RouteComponentProps,
  useLocation,
  Redirect,
} from 'react-router-dom'
// Data
import {
  ADD_SPELL_TO_GRIMOIRE,
  REMOVE_SPELL_FROM_GRIMOIRE,
} from '../../lib/graphql/mutations'
import {
  AddSpellToGrimoire as AddSpellToGrimoireData,
  AddSpellToGrimoireVariables,
} from '../../lib/graphql/mutations/AddSpellToGrimoire/__generated__/AddSpellToGrimoire'
import {
  RemoveSpellFromGrimoire as RemoveSpellFromGrimoireData,
  RemoveSpellFromGrimoireVariables,
} from '../../lib/graphql/mutations/RemoveSpellFromGrimoire/__generated__/RemoveSpellFromGrimoire'
import { GRIMOIRE } from '../../lib/graphql/queries'
import {
  Grimoire as GrimoireData,
  GrimoireVariables,
} from '../../lib/graphql/queries/Grimoire/__generated__/Grimoire'
import { SPELLS } from '../../lib/graphql/queries'
import {
  Spells as SpellsData,
  SpellsVariables,
} from '../../lib/graphql/queries/Spells/__generated__/Spells'
import { SpellsFilter, SpellsSort } from '../../lib/graphql/globalTypes'
import { useQuery } from 'react-apollo'
import { useMutation } from '@apollo/react-hooks'
// Styles
import s from './styles/Grimoire.module.scss'

const { Content } = Layout

interface MatchParams {
  [key: string]: string
}

export const Grimoire = ({ match }: RouteComponentProps<MatchParams>) => {
  const [bottom, setBottom] = useState<number>(10)
  const [editable, setEditable] = useState<boolean>(false)
  const [sort, setSort] = useState<SpellsSort>(SpellsSort.NAME_ASCENDING)
  const [filters, setFilter] = useState<SpellsFilter>({
    school: [],
    castingTime: [],
    level: [],
    classes: [],
    saveRequired: [],
    tags: [],
  })

  useEffect(() => {
    return match.params.edit === 'edit' ? setEditable(true) : undefined
  }, [match.params.edit])

  const currentLocation = useLocation()

  const {
    data: grimoireData,
    // loading: grimoireLoading,
    // error: grimoireError,
  } = useQuery<GrimoireData, GrimoireVariables>(GRIMOIRE, {
    variables: {
      id: match.params.id,
    },
  })

  const {
    data: spellData,
    // loading: spellLoading,
    // error: spellError,
    refetch: spellRefetch,
  } = useQuery<SpellsData, SpellsVariables>(SPELLS, {
    variables: {
      grimoireID: !editable ? match.params.id : null,
      filters,
      sort,
    },
    fetchPolicy: 'network-only',
  })

  const [addSpellToGrimoire] = useMutation<
    AddSpellToGrimoireData,
    AddSpellToGrimoireVariables
  >(ADD_SPELL_TO_GRIMOIRE, {
    refetchQueries: [{ query: GRIMOIRE, variables: { id: match.params.id } }],
  })

  const [removeSpellFromGrimoire] = useMutation<
    RemoveSpellFromGrimoireData,
    RemoveSpellFromGrimoireVariables
  >(REMOVE_SPELL_FROM_GRIMOIRE, {
    refetchQueries: [{ query: GRIMOIRE, variables: { id: match.params.id } }],
  })

  const handleEditEmptyGrimoire = () => {
    setEditable(!editable)
    setBottom(10)
    spellRefetch()
  }

  const handleAddSpellToGrimoire = (spellID: string) => {
    addSpellToGrimoire({ variables: { grimoireID: match.params.id, spellID } })
  }

  const handleRemoveSpellFromGrimoire = (spellID: string) => {
    removeSpellFromGrimoire({
      variables: { grimoireID: match.params.id, spellID },
    })
  }

  if (match.params.edit && match.params.edit !== 'edit') {
    return <Redirect to="/404" />
  }

  if (!spellData || !grimoireData) {
    return (
      <Content className="container">
        {!grimoireData ? (
          <GrimoireDetailesSkeleton />
        ) : (
          <GrimoireDetailes grimoireDetailes={grimoireData.grimoire} />
        )}
        <Divider className="divider" />
        <SpellListSkeleton />
      </Content>
    )
  }

  const grimoireDetailes = grimoireData.grimoire
  const grimoireSpells = grimoireDetailes.spells

  const editSaveButton = (
    <Affix offsetBottom={bottom} className={s.saveContainer}>
      <Link
        onClick={handleEditEmptyGrimoire}
        to={
          editable
            ? `/grimoire/${grimoireDetailes.id}`
            : `/grimoire/${grimoireDetailes.id}/edit`
        }
        className={`ant-avatar ant-btn-primary fixed-widgets-avatar ant-avatar-circle ant-avatar-icon ${s.save}`}
      >
        {editable ? <SaveOutlined /> : <EditOutlined />}
      </Link>
    </Affix>
  )

  const spellList = (
    <SpellList
      spells={spellData.spells}
      grimoireSpells={grimoireSpells}
      editable={editable}
      onAddSpell={handleAddSpellToGrimoire}
      onRemoveSpell={handleRemoveSpellFromGrimoire}
    />
  )

  const emptyList = (
    <>
      <Empty
        className={s.empty}
        description="There are no Spells in your Grimoire yet..."
        image={Empty.PRESENTED_IMAGE_SIMPLE}
      />
      <Link
        onClick={handleEditEmptyGrimoire}
        to={`${currentLocation.pathname}/edit`}
        className="centered ant-btn ant-btn-primary ant-btn-lg"
      >
        Add Spells
      </Link>
    </>
  )

  return (
    <Content className="container">
      <GrimoireDetailes grimoireDetailes={grimoireDetailes} />
      <Divider className="divider" />
      {grimoireSpells?.length ? (
        <>
          <SpellFilter onFilterChange={setFilter} />
          <SpellSort defaultSort={sort} onSortChange={setSort} />
          {spellList}
        </>
      ) : !editable ? (
        emptyList
      ) : (
        <>
          <SpellFilter onFilterChange={setFilter} />
          {spellList}
        </>
      )}
      {editSaveButton}
    </Content>
  )
}
