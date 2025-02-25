import React from 'react'
import styled from 'styled-components'
import queryString from 'query-string'
import { RouteComponentProps } from 'react-router-dom'
import Content from '../../components/Content'
import Search from '../../components/Search'
import i18n from '../../utils/i18n'

const SearchPanel = styled.div`
  margin-top: 211px;
  margin-bottom: 266px;

  @media (max-width: 700px) {
    margin-top: 120px;
    margin-bottom: 150px;
  }

  .search__fail__bar {
    width: 80%;
    margin-left: 10%;
  }
`

const SearchContent = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #606060;
  max-width: 434px;
  margin: 0 auto;
  margin-top: 39px;
  text-align: center;

  @media (max-width: 700px) {
    max-width: 80%;
    font-size: 8px;
    margin-top: 18px;
  }
`

export default (props: React.PropsWithoutRef<RouteComponentProps>) => {
  const { location } = props
  const { search } = location
  const parsed = queryString.parse(search)
  const { q } = parsed

  return (
    <Content>
      <SearchPanel className="container">
        <div className="search__fail__bar">
          <Search opacity content={q as string} />
        </div>
        <SearchContent>{i18n.t('search.empty_result')}</SearchContent>
      </SearchPanel>
    </Content>
  )
}
