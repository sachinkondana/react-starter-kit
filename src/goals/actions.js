import ApiServices from '../_services/ApiServices';
import Utils from '../_services/Utils';

const GoalActions = {
  getGaols: () => ApiServices.get('/goals'),
  deleteGoals: (id) => ApiServices.delete('/goals', { id }),
  saveGoals: (params) => ApiServices.save('/goals', params),
  bulkSave: (goals) => {
    const promises = goals.map((g) => ApiServices.save('/goals', Utils.omit(g, 'dirty')));

    return Promise.all(promises);
  },
};

export default GoalActions;
