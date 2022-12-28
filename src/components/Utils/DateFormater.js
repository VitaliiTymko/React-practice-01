import { formatDistanceToNow, format } from 'date-fns';

// If today is 1 January 2015,
// what is the distance to 1 January 2016, with a suffix?
export const dateToShow = date => {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
  });
};
//=> 'in about 1 year'

export const dateToFormat = date => {
  return format(new Date(date), 'Pp');
};
