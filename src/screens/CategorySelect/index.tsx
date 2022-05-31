import React from 'react';
import { Button } from '../../components';
import { categories } from '../../utils/categories';
import {
  Wrapper,
  Header,
  Title,
  CategoriesList,
  Category,
  Icon,
  Name,
  Footer,
} from './styles';

interface ICategory {
  name: string;
  key: string;
}

interface IProps {
  category: ICategory;
  setCategory: (category: ICategory) => void;
  closeSelect: () => void;
}

export const CategorySelect = ({
  category,
  setCategory,
  closeSelect,
}: IProps) => {
  const handleCategorySelect = (item: ICategory) => {
    setCategory(item);
  };

  return (
    <Wrapper>
      <Header>
        <Title>Categoria</Title>
      </Header>

      <CategoriesList
        data={categories}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Category
            onPress={() => handleCategorySelect(item)}
            isSelected={category.key === item.key}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
      />

      <Footer>
        <Button title="Selecionar" onPress={closeSelect} />
      </Footer>
    </Wrapper>
  );
};
