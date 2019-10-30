import ApiServices from '../_services/ApiServices';
import Utils from '../_services/Utils';

const GoalActions = {
    getGaols: ()=>{
        return ApiServices.get('/goals');
    },
    deleteGoals: (id)=>{
        return ApiServices.delete('/goals', { id });
    },
    saveGoals: (params)=>{
        return ApiServices.save('/goals', params);
    },
    bulkSave: (goals)=>{
        const promises = goals.map(g => ApiServices.save('/goals', Utils.omit(g, 'dirty')));

        return Promise.all(promises);
    },
}

export default GoalActions;
