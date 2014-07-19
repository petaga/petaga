cd templates
mustache index.mustache > ../index.html
mustache pet-insurance-101.mustache > ../pet_insurance_101.html
mustache pet-savings.mustache > ../savings_101.html
mustache about.mustache >../about_us.html
mustache team.mustache > ../team.html
mustache terms.mustache > ../TOS.html
mustache privacy-statement.mustache > ../privacy-statement.html
echo "Build completed at $(date)"
