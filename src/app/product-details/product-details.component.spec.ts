import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { ProductDetailsComponent } from './product-details.component';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailsComponent], 
      imports: [HttpClientModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { 
              paramMap: convertToParamMap({
                productId: '2'
              })
            }
          },
        },
      ],
    });
    fixture = TestBed.createComponent(ProductDetailsComponent);
    
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should instantiate the Product Details Component', () => {
    expect(component).toBeTruthy();
  });

  it('find a valid product', () => {
    expect(component.product).toBeDefined
  });

});


