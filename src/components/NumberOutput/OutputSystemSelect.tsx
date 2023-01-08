import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { NumeralSystem } from '../../types/types';

import { getKeyByValue, numeralSystems } from '../../utils/systems';

interface OutputSystemSelectProps {
  inputSystem: NumeralSystem
  outputSystem: NumeralSystem
  handleOutputSystemChange: (arg0: NumeralSystem) => void
}

const OutputSystemSelect = (props: OutputSystemSelectProps): JSX.Element => {
  const { inputSystem, outputSystem, handleOutputSystemChange } = props;
  const handleChange = (event: SelectChangeEvent) => {
    handleOutputSystemChange(event.target.value as unknown as NumeralSystem);
  };

  return (
    <FormControl sx={{ width: { sm: '100%', md: '30%' } }}>
      <InputLabel>To</InputLabel>
      <Select
        label="To"
        onChange={handleChange}
        value={outputSystem.toString()}
      >
        {
          numeralSystems.map(system => (
            <MenuItem
              disabled={system === inputSystem ? true : false}
              key={system}
              value={system}
            >
              {getKeyByValue(system)}
            </MenuItem>
          ))
        }
      </Select>
    </FormControl>
  );
};

export default OutputSystemSelect;
