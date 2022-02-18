export const categoriesToSelectOptions = categories => {
  return categories.reduce((parentOptions, category) => {
    if (category.parentId === null) {
      return [
        ...parentOptions,
        {id: category.id, label: category.name, options: []},
      ];
    }
    return parentOptions.map(option => {
      if (option.id === category.parentId) {
        return {
          ...option,
          options: [
            ...option.options,
            {
              value: category.name,
              label: category.name,
              parentId: category.parentId,
              id: category.id,
            },
          ],
        };
      }
      return option;
    });
  }, []);
};
