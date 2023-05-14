/**
 * id           SERIAL        PRIMARY KEY\
 * title        VARCHAR(255)  NOT NULL\
 * description  VARCHAR(255)  NOT NULL\
 * status       VARCHAR(255)  NOT NULL -- NOT_STARTED, IN_PROGRESS, COMPLETED\
 * created_at   TIMESTAMP     DEFAULT NOW()\
 * updated_at   TIMESTAMP     DEFAULT NOW()
 */
export interface Todo {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly status: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';
  readonly created_at: Date;
  readonly updated_at: Date;
}
