import _ from 'lodash';

/**
 *
 * @param {array} data row data
 * @param {string} filterText keyword used to filter row data
 * @param {array} searchFields array of fields in the row data object that used to match the keyword
 */
export const filter = (data, filterText, searchFields) => {
  if (filterText === '') {
    return data;
  }
  const regex = new RegExp(filterText, 'i');
  return data.filter(o =>
    _.reduce(searchFields, (result, value) => result || !!(o[value] && o[value].match(regex)), false)
  );
};

export const func = () => {};
