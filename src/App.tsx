import { useState, useEffect } from 'react';

import * as C from './App.styles'
import { Item } from './types/Item'; 
import { items } from './data/items';

import { Category } from './types/Category'; 
import { categories } from './data/categories';

import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';

const App = () => {
  const [list, setlist] = useState(items);
  const [filteredlist, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList( filterListByMonth(list, currentMonth) );
  }, [list, currentMonth]);
 
  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>
          Sistema financeiro
        </C.HeaderText>
      </C.Header>

      <C.Body>
        {/* Área de informações */}

        {/* Área de inserção */}

        <TableArea list={filteredlist}></TableArea>

      </C.Body>
    </C.Container>
  );
}

export default App;