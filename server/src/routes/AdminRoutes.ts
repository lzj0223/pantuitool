// src/routes/userRoutes.ts
import * as LoginController from '../controllers/admin/LoginController';
import { AppRouter } from '../core/router/AppRouter';




const AdminRouter = new AppRouter('/admin')
AdminRouter.add('/login', 'get', LoginController.login)


export default AdminRouter;