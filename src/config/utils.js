const URL_PATTERN = new RegExp(
  '^(https?:\\/\\/)?' + // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))' + // ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port
  '(\\?[;&amp;a-z\\d%_.~+=-]*)?' + // query string
  '(\\#[-a-z\\d_]*)?$',
  'i'
);

export const validateUrl = (url) => URL_PATTERN.test(url);

export const stripTrailingSlash = (url) => url.replace(/\/$/, '');

// export const timeData =  () => [
//   0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
//   21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,
//   41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59].map(formatData)

//  function formatData(element){
//    return {
//     'id': toString(element),
//     'value': toString(element)
//    }
//  }
export const timeData = [
  { id: '0', value: '0' }, { id: '1', value: '1' }, { id: '2', value: '2' }, { id: '3', value: '3' }, { id: '4', value: '4' },
  { id: '5', value: '5' }, { id: '6', value: '6' }, { id: '7', value: '7' }, { id: '8', value: '8' }, { id: '9', value: '9' },
  { id: '10', value: '10' }, { id: '11', value: '11' }, { id: '12', value: '12' }, { id: '13', value: '13' }, { id: '14', value: '14' },
  { id: '15', value: '15' }, { id: '16', value: '16' }, { id: '17', value: '17' }, { id: '18', value: '18' }, { id: '19', value: '19' },
  { id: '20', value: '20' }, { id: '21', value: '21' }, { id: '22', value: '22' }, { id: '23', value: '23' }, { id: '24', value: '24' },
  { id: '25', value: '25' }, { id: '26', value: '26' }, { id: '27', value: '27' }, { id: '28', value: '28' }, { id: '29', value: '29' },
  { id: '30', value: '30' }, { id: '31', value: '31' }, { id: '32', value: '32' }, { id: '33', value: '33' }, { id: '34', value: '34' },
  { id: '35', value: '35' }, { id: '36', value: '36' }, { id: '37', value: '37' }, { id: '38', value: '38' }, { id: '39', value: '39' },
  { id: '40', value: '40' }, { id: '41', value: '41' }, { id: '42', value: '42' }, { id: '43', value: '43' }, { id: '44', value: '44' },
  { id: '45', value: '45' }, { id: '46', value: '46' }, { id: '47', value: '47' }, { id: '48', value: '48' }, { id: '49', value: '49' },
  { id: '50', value: '50' }, { id: '51', value: '51' }, { id: '52', value: '52' }, { id: '53', value: '53' }, { id: '54', value: '54' },
  { id: '55', value: '55' }, { id: '56', value: '56' }, { id: '57', value: '57' }, { id: '58', value: '58' }, { id: '59', value: '59' }
];