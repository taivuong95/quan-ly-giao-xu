import React from 'react';

import { GIAO_XU } from '../../../models/formModel';
import CustomForm from '../../Form/CustomForm';

const GiaoXu = () => {
  return <CustomForm formModel={GIAO_XU} soCot={GIAO_XU.length} />;
};

export default GiaoXu;
