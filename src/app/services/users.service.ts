import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userList: any[] = [
    {
      guid: '6f126825-a5ef-4014-98c7-fb5e7a923c24',
      name: 'Brandie Skinner',
      username: 'dgreen',
      password: 'titan',
      gender: 'female',
      company: 'REVERSUS',
      email: 'brandieskinner@reversus.com',
      phone: '+1 (955) 572-2856',
      address: '791 Roder Avenue, Dundee, South Dakota, 1555',
      registered: '2019-07-29T12:56:34 +04:00'
    },
    {
      guid: 'a85524d3-4a18-4990-88a2-ed661ddf521a',
      name: 'Delveri Chick',
      username: 'admin',
      password: 'titan',
      gender: 'male',
      company: 'MAZUDA',
      email: 'delveri.chick@titanoms.com',
      phone: '+1 (866) 461-3632',
      address: '841 Bushwick Place, Glenville, Alabama, 9615',
      registered: '2017-08-10T03:13:08 +04:00'
    },
    {
      guid: '15c78240-a715-4b75-a62f-29fa5acdc726',
      name: 'Ila Gardner',
      username: 'jdoe',
      password: 'titan',
      gender: 'female',
      company: 'ISOSURE',
      email: 'ilagardner@isosure.com',
      phone: '+1 (931) 539-2388',
      address: '814 Tompkins Avenue, Gila, South Carolina, 182',
      registered: '2020-12-05T09:52:11 +05:00'
    },
    {
      guid: '4bc62006-1a7a-4363-bbeb-19f215687553',
      name: 'Witt Hatfield',
      username: 'jdoe',
      password: 'titan',
      gender: 'male',
      company: 'SENTIA',
      email: 'witthatfield@sentia.com',
      phone: '+1 (889) 536-3348',
      address: '702 Mill Avenue, Harrison, Louisiana, 116',
      registered: '2014-12-22T01:32:42 +05:00'
    },
    {
      guid: 'c3d6ab1d-8e75-4b5d-acb4-ccf047d1770b',
      name: 'Kristine Knapp',
      username: 'supervisor',
      password: 'titan',
      gender: 'female',
      company: 'WAZZU',
      email: 'kristineknapp@wazzu.com',
      phone: '+1 (916) 443-2849',
      address: '971 Meserole Avenue, Ilchester, Texas, 4945',
      registered: '2020-01-07T03:29:29 +05:00'
    }
  ];
}
