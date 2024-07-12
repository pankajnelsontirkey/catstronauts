import { RESTDataSource } from '@apollo/datasource-rest';

import { AuthorModel, ModuleModel, TrackModel } from '../models';

export class TrackAPI extends RESTDataSource {
  baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';

  getTracksforHome() {
    return this.get<TrackModel[]>('tracks');
  }

  getAuthor(authorId: string) {
    return this.get<AuthorModel>(`author/${authorId}`);
  }

  getTrack(trackId: string) {
    return this.get<TrackModel>(`track/${trackId}`);
  }

  getTrackModules(trackId: string) {
    return this.get<ModuleModel[]>(`track/${trackId}/modules`);
  }

  getModule(moduleId: string) {
    return this.get<ModuleModel>(`module/${moduleId}`);
  }
}
