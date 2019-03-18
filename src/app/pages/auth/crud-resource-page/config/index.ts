import { USER_TABLE_CONFIG } from './resource-table/user-table.config';
import { USERS_FORM_MODEL } from './resource-form/users-form.config';
import { SKILLS_TABLE_CONFIG } from './resource-table/skills-table.config';
import { SKILLS_FORM_MODEL } from './resource-form/skills-form.config';

export const RESOURCE_PAGE_CONFIG = {
  users: {
    tableConfig: USER_TABLE_CONFIG,
    formConfig: USERS_FORM_MODEL
  },
  skills: {
    tableConfig: SKILLS_TABLE_CONFIG,
    formConfig: SKILLS_FORM_MODEL
  }
};
