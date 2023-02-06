using {guipup} from '../db/data-model';

service CatalogService @(path: '/CatalogService') {
    entity product as projection on guipup.product;
}
