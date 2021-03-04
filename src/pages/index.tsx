import { Form } from '../components/Form';

import styles from '../styles/pages/Login.module.css';

function Login() {
  return (
    <Form >
      <div className={styles.title}>
        <img src="/logo-full.svg" alt="Fechar modal" />
      </div>
    </Form>
  )
}

export default Login;