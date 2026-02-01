import { OGImageRoute } from 'astro-og-canvas';

export const { getStaticPaths, GET } = await OGImageRoute({
  param: 'route',
  pages: {
    'og-image': {
      title: 'Sebastian Diez',
      description: 'Desarrollador de Software Full Stack',
    },
  },
  getImageOptions: (_path, page) => {
    return {
      title: page.title,
      description: page.description,
      bgGradient: [[3, 6, 10], [10, 20, 30]],
      padding: 60,
      font: {
        title: {
          color: [255, 255, 255],
          size: 72,
          weight: 'Bold',
          families: ['Roboto'],
        },
        description: {
          color: [168, 178, 209],
          size: 40,
          weight: 'Normal',
          families: ['Roboto'],
        },
      },
      fonts: [
        './src/assets/fonts/Roboto-Bold.ttf',
      ],
    };
  },
});
