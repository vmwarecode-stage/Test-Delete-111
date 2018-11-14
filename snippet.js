import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ApiContributionComponent } from './components/api-contribution/api-contribution.component';
import { AuthGuard } from 'app/guards/auth.guard';
import { LoginComponent } from 'app/components/login/login.component';
import { ApiEditComponent } from './components/api-contribution/api-edit/api-edit.component';
import { GeneralEditComponent } from './components/general-edit/general-edit.component';
import { GeneralAddComponent } from './components/general-add/general-add.component';
import { ArtifactContributionComponent } from './components/artifact-contribution/artifact-add/artifact-add.component';
import { ArtifactEditComponent } from './components/artifact-contribution/artifact-edit/artifact-edit.component';
import { SsoGuard } from './guards/sso.guard';
import { DcrArtifactType as Type} from './model/artifact/dcr-artifact-type-enum';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: Type.getDisplayInfo(Type.Enum.apidoc).addRoute, component: ApiContributionComponent, canActivate: [AuthGuard] },
  { path: Type.getDisplayInfo(Type.Enum.apidoc).editRoute, component: ApiEditComponent, canActivate: [AuthGuard] },
  { path: Type.getDisplayInfo(Type.Enum.devkit).addRoute, component: ArtifactContributionComponent, canActivate: [AuthGuard] },
  { path: Type.getDisplayInfo(Type.Enum.devkit).editRoute, component: ArtifactEditComponent, canActivate: [AuthGuard] },
  { path: Type.getDisplayInfo(Type.Enum.cert).addRoute, component: ArtifactContributionComponent, canActivate: [AuthGuard] },
  { path: Type.getDisplayInfo(Type.Enum.cert).editRoute, component: ArtifactEditComponent, canActivate: [AuthGuard] },
  { path: Type.getDisplayInfo(Type.Enum.tool).addRoute, component: ArtifactContributionComponent, canActivate: [AuthGuard] },
  { path: Type.getDisplayInfo(Type.Enum.tool).editRoute, component: ArtifactEditComponent, canActivate: [AuthGuard] },
  { path: Type.getDisplayInfo(Type.Enum.program).addRoute, component: GeneralAddComponent },
  { path: Type.getDisplayInfo(Type.Enum.program).editRoute, component: GeneralEditComponent },
  { path: Type.getDisplayInfo(Type.Enum.doc).addRoute, component: GeneralAddComponent },
  { path: Type.getDisplayInfo(Type.Enum.doc).editRoute, component: GeneralEditComponent },
  { path: 'login', component: LoginComponent },
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES, { useHash: true });
