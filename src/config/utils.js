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


export const timeData = [
  { id: '00', value: '00' },  { id: '01', value: '01' }, { id: '02', value: '02' }, { id: '03', value: '03' }, { id: '04', value: '04' },
  { id: '05', value: '05' }, { id: '06', value: '06' }, { id: '07', value: '07' }, { id: '08', value: '08' }, { id: '09', value: '09' },
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
export const hours = [
  { id: '01', value: '01' }, { id: '02', value: '02' }, { id: '03', value: '03' }, { id: '04', value: '04' },
  { id: '05', value: '05' }, { id: '06', value: '06' }, { id: '07', value: '07' }, { id: '08', value: '08' }, { id: '09', value: '09' },
  { id: '10', value: '10' }, { id: '11', value: '11' }, { id: '12', value: '12' }
];