cd templates
mustache index.mustache > ../index.html
mustache pet-insurance-101.mustache > ../pet_insurance_101.html
mustache pet-savings.mustache > ../savings_101.html
mustache about.mustache >../about.html
mustache team.mustache > ../team.html
echo "Build completed at $(date)"
