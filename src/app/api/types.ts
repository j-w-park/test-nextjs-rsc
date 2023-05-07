/**
 * id           SERIAL        PRIMARY KEY\
 * title        VARCHAR(255)  NOT NULL\
 * description  VARCHAR(255)  NOT NULL\
 * status       VARCHAR(255)  NOT NULL -- NOT_STARTED, IN_PROGRESS, COMPLETED\
 * created_at   TIMESTAMP     DEFAULT NOW()\
 * updated_at   TIMESTAMP     DEFAULT NOW()
 */
export interface Todo {
  id: number;
  title: string;
  description: string;
  status: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';
  created_at: string;
  updated_at: string;
}
