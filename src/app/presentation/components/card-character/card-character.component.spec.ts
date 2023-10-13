import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Character } from 'src/app/domain/models/character.model';
import { CardCharacterComponent } from './card-character.component';

describe('CardCharacterComponent', () => {
  let component: CardCharacterComponent;
  let fixture: ComponentFixture<CardCharacterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCharacterComponent],
    });

    fixture = TestBed.createComponent(CardCharacterComponent);
    component = fixture.componentInstance;
  });

  // it('should create the component', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should render the card HTML', () => {
    const character: Character = {
      name: 'Rick Sanchez',
      species: 'Human',
      origin: { name: 'Earth (C-137)', url: 'test.com' },
      episode: ['episode1', 'episode2'],
      status: 'Alive',
      image: 'path/to/image.png',
      id: 0,
      type: '',
      gender: '',
      location: {
        name: '',
        url: ''
      },
      url: '',
      created: ''
    };

    // Pass the mock character to the component's input
    component.character = character;
    fixture.detectChanges();

    // Query the DOM for elements
    const cardElement = fixture.nativeElement.querySelector('.main-card');
    const imageElement = fixture.nativeElement.querySelector('.main-card__image');
    const infoTextElements = fixture.nativeElement.querySelectorAll('.info-text');

    // Perform expectations to verify the rendering
    expect(cardElement).toBeTruthy();
    expect(imageElement).toBeTruthy();
    expect(infoTextElements.length).toBe(5);

    // Additional expectations for specific content
    expect(infoTextElements[0].textContent).toContain('Name: Rick Sanchez');
    expect(infoTextElements[1].textContent).toContain('Species: Human');
    expect(infoTextElements[2].textContent).toContain('Origin: Earth (C-137)');
    expect(infoTextElements[3].textContent).toContain('Number of episodes: 2');
    expect(infoTextElements[4].textContent).toContain('Status: Alive');
  });

  // Puedes agregar más pruebas aquí para verificar otros aspectos del componente.
});
