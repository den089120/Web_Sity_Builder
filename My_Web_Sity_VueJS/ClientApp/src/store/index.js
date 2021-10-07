import { createStore } from 'vuex';
import { jobState } from './jobState';
import { materialState } from './materialState';
import { photoJobState } from './photoJobState';

export default createStore({
    modules: {
        jobs: jobState,
        materials: materialState,
        photoJobs: photoJobState,
    }
})